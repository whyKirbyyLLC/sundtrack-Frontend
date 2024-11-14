'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';
import styles from "./page.module.css";

export default function Track() {
    const { user, isLoading } = useUser();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const updateToPaidUser = async () => {
        if (!user) {
            setError('User is not logged in.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/auth/update-role', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.sub,
                    roleName: 'Paid User'
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to update role');
            }

            setSuccess(true);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

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
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>Role updated successfully!</p>}
                <button 
                    onClick={updateToPaidUser}
                    className={styles.button}
                    disabled={loading}
                >
                    {loading ? 'Updating...' : 'Upgrade to Paid User'}
                </button>
            </div>
        </div>
    );
}
