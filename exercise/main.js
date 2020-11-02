"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var currentLikeCount = 10;
var component = new like_component_1.LikeComponent(currentLikeCount, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
