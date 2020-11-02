export class LikeComponent {
    constructor(private _likesCount?: number, private _isSelected?: boolean) {
    }

    get likesCount(): number {
        return this._likesCount;
    }

    get isSelected(): boolean {
        return this._isSelected;
    }

    onClick(): void {
        this._likesCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    }
}