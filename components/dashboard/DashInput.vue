<script setup lang="ts">
import {Card} from "~/components/ui/card";
import { ref } from 'vue'
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";
import { useUserStore } from '~/stores/user';
import {createShortLink} from "~/composibles/useLinks";

const url = ref('')
const userStore = useUserStore()

const handleShorten = async() => {
	if (!userStore.user || !url.value) return
	const newLink = await createShortLink(url.value.trim(), userStore.user.uid)
	userStore.links.unshift(newLink)
	url.value = ''
}
</script>

<template>
	<div class="w-full">
		<Card class="card-grid px-5 py-7">
			<Input placeholder="Втавьте вашу длинную ссылку" v-model="url"/>
			<Button @click="handleShorten">Сократить</Button>
		</Card>
	</div>
</template>

<style scoped>
.card-grid {
	display: grid;
	grid-template-columns: auto min-content;
}
</style>