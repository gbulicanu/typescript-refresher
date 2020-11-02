export class LikeComponent {
    constructor(public likesCount?: number, public isSelected?: boolean) {
    }

    onClick(): void {
        this.likesCount += (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    }
}