<script setup lang="ts">
import {Avatar} from "~/components/ui/avatar";
import { UserRound } from 'lucide-vue-next';
</script>
<template>
	<div class="w-full flex justify-between items-center mb-8">
		<h2
			class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			Спискок ссылок
		</h2>
		<Avatar class="bg-primary items-center justify-center w-10 h-10 text-black">
			<UserRound/>
		</Avatar>
	</div>
</template>