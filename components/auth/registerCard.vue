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
} from '@/components/ui/form';

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { toast } from "vue-sonner";
import {useRegister} from "~/composibles/useRegister";
import {useCreateUserCollection} from "~/composibles/useCreateUserCollection";
import { Loader2 } from 'lucide-vue-next'

const model = defineModel({default: 'login'})

const registerSchema = toTypedSchema(z.object({
	email: z.string().email("Некорректный email"),
	password: z.string().min(8, "Минимум 8 символов")
}));

const { handleSubmit } = useForm({
	validationSchema: registerSchema,
});

const { register, loading, error } = useRegister();

const onSubmit = handleSubmit(async(values) => {
	values.email = values.email.trim();
	values.password = values.password.trim();

	const user = await register(values.email, values.password);

	if (user) {
		toast.success(`Вы зарегистрировались как ${
user.email
}`, {
				description: new Date().toDateString(),
			});
		model.value = 'login'
		await useCreateUserCollection(user)
	} else if (error.value) {
		toast.error("Ошибка регистрации: " + error.value);
	}
});


</script>

<template>
	<Card>
		<CardHeader>
			<CardTitle class="text-center">Еще не пользовался Shorty?</CardTitle>
			<CardDescription class="text-center">
				Создай свой акаун и приступай!
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

				<Button class="w-full" disabled v-if="loading">
					<Loader2 class="w-4 h-4 mr-2 animate-spin"/>
					Пожалуйста подождите
				</Button>
				<Button v-else type="submit" class="w-full">Зарегистрироваться</Button>
			</form>
		</CardContent>
	</Card>
</template>
