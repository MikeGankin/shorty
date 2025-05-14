<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import DashItem from "~/components/dashboard/DashItem.vue";

const userStore = useUserStore()
</script>

<template>
	<ul class="flex flex-col gap-2">
		<DashItem v-for="link in userStore.links" :key="link.shortCode" :link="link"/>
	</ul>
</template>