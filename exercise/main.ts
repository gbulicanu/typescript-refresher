import { LikeComponent } from "./like.component";

let currentLikeCount: number = 10;

let component = new LikeComponent(currentLikeCount, false);
component.onClick();
console.log(component.likesCount);