<script lang="ts" setup>
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/components/ui/tabs'
import LoginCard from "~/components/auth/loginCard.vue";
import RegisterCard from "~/components/auth/registerCard.vue";

const activeTab = ref('login')
</script>

<template>
	<Tabs class="w-[400px]" :model-value="activeTab">
		<TabsList class="grid w-full grid-cols-2">
			<TabsTrigger value="login" @click="activeTab = 'login'">
				Войти
			</TabsTrigger>
			<TabsTrigger value="register" @click="activeTab = 'register'">
				Зарегистрироваться
			</TabsTrigger>
		</TabsList>
		<TabsContent value="login">
			<LoginCard/>
		</TabsContent>
		<TabsContent value="register">
			<RegisterCard v-model="activeTab"/>
		</TabsContent>
	</Tabs>
</template>