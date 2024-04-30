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

export function BuyDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-[#5594F4] hover:bg-[#eeb6b6] text-black py-2 px-4 rounded-[10px] mr-4 ">
					Купить
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-center">Регистрация</DialogTitle>
				</DialogHeader>

				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="email" className="text-right">
							Электронная почта
						</Label>
						<Input id="email" placeholder="example@ex.com" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Адрес
						</Label>
						<Input id="name" placeholder="Виктор" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="password" className="text-right">
							Номер телефона
						</Label>
						<Input id="password" placeholder="*****" className="col-span-3" />
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Подтвердить заказ</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
