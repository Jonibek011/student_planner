"use client";

import { useState, useEffect, useCallback } from "react";

// Mock user data
const MOCK_USER = {
  id: "mock-user-123",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar_url: "https://api.dicebear.com/7.x/lorelei/svg?seed=JohnDoe",
};

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user from a session or local storage
    const fetchUser = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
      setUser(MOCK_USER); // Always "log in" the mock user
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  const signIn = useCallback(async (email, password) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

    if (email === MOCK_USER.email && password === "password") {
      setUser(MOCK_USER);
      setIsLoading(false);
      return { success: true, user: MOCK_USER };
    } else {
      setIsLoading(false);
      return { success: false, error: "Noto'g'ri email yoki parol." };
    }
  }, []);

  const signUp = useCallback(async (name, email, password) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

    const newUser = { ...MOCK_USER, name, email };
    setUser(newUser);
    setIsLoading(false);
    return { success: true, user: newUser };
  }, []);

  const signOut = useCallback(async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
    setUser(null);
    setIsLoading(false);
    return { success: true };
  }, []);

  const updateProfile = useCallback(async (updates) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
    setUser((prevUser) => {
      if (!prevUser) return null;
      return { ...prevUser, ...updates };
    });
    setIsLoading(false);
    return { success: true };
  }, []);

  return { user, isLoading, signIn, signUp, signOut, updateProfile };
}
