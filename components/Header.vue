<script setup lang="ts">
import {Button} from "~/components/ui/button";
import {useLogout} from "~/composibles/useLogout";
const { logout } = useLogout()
</script>

<template>
	<header class="w-full flex items-center justify-between pb-4 border-b mb-8">
		<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
			Shorty
		</h3>
		<Button @click="logout">
			Выйти
		</Button>
	</header>
</template>
