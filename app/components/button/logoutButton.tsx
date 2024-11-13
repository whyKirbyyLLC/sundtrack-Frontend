"use client";

import { useRouter } from 'next/navigation';
import styles from '@/styles/page/header.module.css';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        router.push('/api/auth/logout');
    };

    return (
        <button 
            onClick={handleLogout}
            className={styles.navigation}
        >
            logout
        </button>
    );
} 