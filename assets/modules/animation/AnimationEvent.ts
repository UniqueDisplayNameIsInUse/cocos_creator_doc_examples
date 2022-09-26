import { _decorator, Component, Node, Animation, AnimationState } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationEvent')
export class AnimationEvent extends Component {
    
    start() {
        let animation = this.node.getComponent(Animation);
        animation.on(Animation.EventType.FINISHED, this.onAnimationEvent, this)
    }

    onAnimationEvent(type: Animation.EventType, state: AnimationState) {

    }
}


