<template></template>

<script setup lang="ts">
import { useToaster } from "../lib/components/Toaster";

const toaster = useToaster();

toaster.addToast({
  title: "Hello",
  message: "World",
  type: "success",
});
</script>

<style></style>
