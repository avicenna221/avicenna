"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import Layout from "../../../Layout";
// material-ui
import { Grid } from "@mui/material";
// project imports
import StudentContactsTable from "@/app/components/ContactTableComponent/ContactTable";
import BlogForm from "./BlogForm";
import { postRequest } from "@/app/RequestsAPI/RequestsApi";
import { useRouter } from 'next/navigation';
// meta export
export const meta = () => ({
  title: "Dashboard | Berry - React Material Admin Dashboard Template",
  description:
    "Start your next React project with Berry admin template. It build with Reactjs, Material-UI, Redux, and Hook for faster web development.",
});

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      console.log("valoo", values);
      const response = await postRequest("/api/blogs", values);
      console.log("response", response);
      if(response.status==201)
        router.push('/admin/dashboard/news');
      // if (response.success) {
      //   window.alert('/blogs');
      // } else {
      //   console.error('Failed to create the blog');
      // }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <Layout>
      <Grid container spacing={3} mt={5}>
        <BlogForm onSubmit={handleSubmit} />
      </Grid>
    </Layout>
  );
}
