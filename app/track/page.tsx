'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";

export default function Track() {
    const { user, isLoading } = useUser();
    const [roles, setRoles] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchUserRoles = async () => {
          if (!user?.sub) {
            console.error('User ID (sub) is missing.');
            return;
          }
      
          setLoading(true);
          try {
            console.log('Fetching roles for User ID:', user.sub);
      
            const response = await fetch('/api/auth/get-roles', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'user-id': user.sub ?? '',
              },
            });
      
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || 'Failed to fetch user roles');
            }
      
            const responseData = await response.json();
            console.log('Response data:', responseData);
      
            const userRoles = Array.isArray(responseData.data?.data)
            ? responseData.data.data.map((role: any) => role.name)
            : [];
      
            setRoles(userRoles);
            console.log('Parsed user roles:', userRoles);
          } catch (error: any) {
            setError(error.message);
            console.error('Error fetching user roles:', error.message);
          } finally {
            setLoading(false);
          }
        };
      
        fetchUserRoles();
      }, [user]);
      

    const isPaidUser = roles.includes('Paid User');

    const handleRoleUpdate = async (action: 'add' | 'remove') => {
        if (!user) {
            setError('User is not logged in.');
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('/api/auth/update-role', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.sub,
                    roleName: 'Paid User',
                    action,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Failed to ${action} role`);
            }

            setSuccess(true);
            if (action === 'remove') {
                setRoles(roles.filter(role => role !== 'Paid User'));
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const assignPaidUserRole = () => handleRoleUpdate('add');
    const removePaidUserRole = () => handleRoleUpdate('remove');

    if (isLoading) {
        return <p>Loading user data...</p>;
    }

    return (
        <div className={styles.page}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>daily diet diary</p>
                <p className={styles.subtitle}>
                    For the best results, try tracking your meals for at least a week to get the most accurate insights and achieve the best results.
                </p>
            </div>
            <div className={styles.formContainer}>
                {!user && (
                    <p className={styles.warning}>Please log in to access tracking features.</p>
                )}
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>Role assigned successfully!</p>}
                {user && !isPaidUser && (
                    <button
                        onClick={assignPaidUserRole}
                        className={styles.button}
                        disabled={loading}
                    >
                        {loading ? 'Assigning...' : 'Upgrade to Paid User'}
                    </button>
                )}
                {isPaidUser && (
                    <div>
                        <p className={styles.success}>You are a Paid User! ✨</p>
                        <button
                            className={styles.button}
                            onClick={() => window.location.href = '/tracking-dashboard'}
                        >
                            Access Tracking Dashboard
                        </button>
                        <button
                            className={styles.button}
                            onClick={removePaidUserRole}
                            disabled={loading}
                        >
                            {loading ? 'Removing...' : 'Remove Paid User Access'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
