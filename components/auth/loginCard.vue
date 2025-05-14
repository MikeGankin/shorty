<script lang="ts" setup>
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '~/components/ui/form';

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { toast } from "vue-sonner";
import {useLogin} from "~/composibles/useLogin";
import { navigateTo } from '#app'
import { Loader2 } from 'lucide-vue-next'

const loginSchema = toTypedSchema(z.object({
	email: z.string().email("Некорректный email"),
	password: z.string().min(8, "Минимум 8 символов")
}));

const {
		handleSubmit
	} = useForm({
		validationSchema: loginSchema,
	})

const { login, loading, error } = useLogin();

const onSubmit = handleSubmit(async(values) => {
	const user = await login(values.email, values.password);

	if (user) {
		toast.success(`Вы успешно вошли как ${user.email}`);
		navigateTo('/dashboard')
	} else if (error.value) {
		toast.error("Такого акаунта не существует");
	}
});
</script>

<template>
	<Card>
		<CardHeader>
			<CardTitle class="text-center">С возвращением</CardTitle>
			<CardDescription class="text-center">
				Войдите в свой Shorty аккаунт
			</CardDescription>
		</CardHeader>
		<CardContent class="space-y-2">
			<form class="space-y-6" @submit="onSubmit">
				<FormField v-slot=" { componentField }" name="email">
					<FormItem>
						<FormLabel>Email</FormLabel>
						<FormControl>
							<Input type="email" placeholder="example@mail.com" v-bind="componentField"/>
						</FormControl>
						<FormMessage/>
					</FormItem>
				</FormField>

				<FormField v-slot=" { componentField }" name="password">
					<FormItem>
						<FormLabel>Пароль</FormLabel>
						<FormControl>
							<Input type="password" placeholder="********" v-bind="componentField"/>
						</FormControl>
						<FormMessage/>
					</FormItem>
				</FormField>

				<Button type="submit" class="w-full" :disabled="loading">
					<div v-if="loading" class="flex items-center">
						<Loader2 class="w-4 h-4 mr-2 animate-spin"/>
						Пожалуйста подождите
					</div>
					<span v-else>
						Войти
					</span>
				</Button>
			</form>
		</CardContent>
	</Card>
</template>
