<script setup lang="ts">
import {Button} from "~/components/ui/button";
</script>

<template>
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
		Shorty — меньше символов,<br> больше возможностей.
	</h1>
	<p class="leading-7 [&:not(:first-child)]:mt-6 text-center">
		Сокращайте длинные ссылки за секунды<br> и делитесь ими где угодно.
	</p>
	<Button class="mt-6 size-fit" @click='navigateTo("/auth")'>Начать</Button>
</template>