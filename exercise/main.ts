import { LikeComponent } from "./like.component";

let currentLikeCount: number = 10;

let component = new LikeComponent(currentLikeCount, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);