export class LikeComponent {
    constructor(public likesCount?: number, public isSelected?: boolean) {
    }

    onClick(): void {
        if(this.isSelected){
            this.likesCount--;
            this.isSelected = false;
        } else {
            this.likesCount++;
            this.isSelected = true;
        }
    }
}