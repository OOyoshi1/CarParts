import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "./components/ui/label";

export function AuthDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-[#ABBBF5] hover:bg-[#eeb6b6] text-black py-2 px-4 rounded-[10px] mr-4">
					Войти
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-center">Авторизация</DialogTitle>
				</DialogHeader>

				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="email" className="text-right">
							Электронная почта
						</Label>
						<Input id="email" placeholder="example@ex.com" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="password" className="text-right">
							Пароль
						</Label>
						<Input id="password" placeholder="*****" className="col-span-3" />
					</div>
				</div>
				<DialogFooter>
					<Button
						type="submit"
						className="bg-[#ABBBF5] hover:bg-[#eeb6b6] text-black py-2 px-4 rounded-[10px] mr-4"
					>
						Войти
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
