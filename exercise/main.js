"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var currentLikeCount = 10;
var component = new like_component_1.LikeComponent(currentLikeCount, false);
component.onClick();
console.log(component.likesCount);
