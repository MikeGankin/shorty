<script setup lang="ts">
import {Toaster} from "vue-sonner";
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>
		<Toaster/>
		<SpeedInsights/>
	</div>
</template>
