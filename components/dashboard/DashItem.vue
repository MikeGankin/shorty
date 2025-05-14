<script setup lang="ts">
import {Card} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import { Copy, Check } from 'lucide-vue-next';
import type {ShortLink} from "~/types";
import { toast } from "vue-sonner";
import {Skeleton} from "~/components/ui/skeleton";

const props = defineProps<{
	link: ShortLink
}>()

const isCopied = ref(false)
const userStore = useUserStore()
const shortLink = computed(() => {
	return `shorty.com/${props.link.shortCode}`
})
const copy = async() => {
	await navigator.clipboard.writeText(shortLink.value)
	toast.success('Ссылка скопирована!')
	isCopied.value = true
}
</script>

<template>
	<Skeleton v-if="userStore.loading" class="w-full h-[118px] rounded-[20px]"/>
	<Card v-else class="link-list-item px-5 py-7 grid gap-2">
		<a :href="shortLink" target="_blank" class="text-xl col-start-1 col-end-2 text-primary underline-offset-4 hover:underline">
			{{shortLink}}
		</a>
		<p class="truncate w-[80%] text-xs text-muted-foreground col-start-1 col-end-2">
			{{ link.originalUrl }}
		</p>
		<Button @click="copy" class="row-start-1 row-end-3 col-start-2 col-end-3 rounded-full h-full w-15 h-15 justify-self-end">
			<Copy v-if="!isCopied"/>
			<Check v-else/>
		</Button>
	</Card>
</template>

