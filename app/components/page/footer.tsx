"use client";

import React from "react";
import styles from "@/styles/page/footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>

                <div className={styles.column}>
                    <h4 className={styles.columnTitleVersion}>sundtrack v0.0.1</h4>
                    <Link href="/contact">scientific-background</Link>
                    <Link href="/contact">protocols and methods</Link>
                    <p className={styles.copyright}>© Sundtrack</p>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>customers</h4>
                    <Link href="/about">about us</Link>
                    <Link href="/faq">faq</Link>
                    <Link href="/disclaimer">disclaimer</Link>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>contact us</h4>
                    <Link href="/contact">email us</Link>
                    <Link href="/contact">find us on Instagram</Link>
                    <Link href="/contact">find us on Facebook</Link>
                </div>
            </div>
            <p className={`${styles.copyright} ${styles.copyrightMobile}`}>© Sundtrack</p>
        </footer>
    );
}
