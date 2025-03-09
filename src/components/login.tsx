"use client";

import React, { useState } from "react";
import styles from "@/components/login.module.css";

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "rafael.holler@gmail.com" && password === "123") {
      // Define os cookies com tempo de expiração de 1 hora
      document.cookie = `user_email=${email}; path=/; max-age=3600`;
      document.cookie = `user_password=${password}; path=/; max-age=3600`;

      // Chama a função para atualizar o estado de login na Home
      onLogin();
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src="https://dynamic.design.com/preview/logodraft/732b1b8e-9a34-42ef-b5d9-f0e0584a4c08/image/large.png"
          alt="Logo"
          className={styles.logo}
        />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.inputField}
              placeholder="E-mail"
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.inputField}
              placeholder="Senha"
            />
          </div>
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>
        <footer className={styles.footer}>
          <p>© 2024. Easy Sync, Inc.</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
