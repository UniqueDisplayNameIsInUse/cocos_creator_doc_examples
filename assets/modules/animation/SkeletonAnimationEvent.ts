import { _decorator, Component, Node, SkeletalAnimation, Animation, SkeletalAnimationState } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SkeletonAnimationEvent')
export class SkeletonAnimationEvent extends Component {
    start() {

        let skeletalAnimation = this.node.getComponent(SkeletalAnimation);
        skeletalAnimation.on(Animation.EventType.FINISHED, this.onAnimationFinished, this);
    }

    onAnimationFinished(type:Animation.EventType, state:SkeletalAnimationState){
        console.log(type, state);
    }
}

