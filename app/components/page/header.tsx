"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/page/header.module.css";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClickOutside = (e: MouseEvent) => {
        const menu = document.querySelector(`.${styles.menu}`);
        const menuButton = document.querySelector(`.${styles.menuButton}`);
        
        if (menu && !menu.contains(e.target as Node) && 
            menuButton && !menuButton.contains(e.target as Node)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <Link className={styles.brand} href="/">sundtrack</Link>
            <nav className={`${styles.navigation} ${isMenuOpen ? styles.navigationShifted : ''}`}>
                <Link href="/account" onClick={() => setIsMenuOpen(false)}>account</Link>
                <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>pricing</Link>
                {!isMenuOpen && (
                    <Link href="#" 
                        className={styles.menuButton}
                        onClick={() => setIsMenuOpen(true)}
                    >
                        menu
                    </Link>
                )}
            </nav>
            <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <nav className={styles.menuContent}>
                    <Link href="#" 
                        className={styles.closeButton}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Close
                    </Link>
                    <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}
