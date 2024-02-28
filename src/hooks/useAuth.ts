"use client";
import { useState, useEffect } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "@/firebase/auth";

import { useAuthStore } from "@store/auth-store";

const useAuth = () => {
  const { user, error, authorized, setUser, setError, setAuthorized } =
    useAuthStore();
  const [authenticationInProgress, setAuthenticationInProgress] =
    useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth changed", currentUser);
      if (currentUser) {
        setUser(currentUser);
        setAuthorized(true);
      } else {
        setUser(null);
        setAuthorized(false);
      }
      setTimeout(() => {
        setAuthenticationInProgress(false);
      }, 100);
    });

    return () => unsubscribe();
  }, []);

  const loginEmail = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error: any) {
      setError(error.message);
    }
  };

  const registerEmail = async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error: any) {
      setError(error.message);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return {
    user,
    error,
    authorized,
    loginEmail,
    registerEmail,
    logout,
    authenticationInProgress,
  };
};

export default useAuth;
