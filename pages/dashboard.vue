<script setup lang="ts">
import DashInput from "~/components/dashboard/DashInput.vue";

definePageMeta({
	middleware: 'auth',
	layout: 'header'
})
import DashHeader from "~/components/dashboard/DashHeader.vue";
import DashList from "~/components/dashboard/DashList.vue";
</script>

<template>
	<DashHeader/>
	<div class="flex flex-col gap-4 w-full">
		<DashInput/>
		<DashList/>
	</div>
</template>