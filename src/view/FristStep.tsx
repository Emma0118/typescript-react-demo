import * as React from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

interface FristStepProps {
    changeFunc: any;
}

export default class FristStep extends React.Component<FristStepProps, {}> {
    constructor(props: any) {
        super(props);
    }
    state = {
        value: 1,
    };
    onChange = (e: any) => {
        this.setState({
            value: e.target.value,
        });
        this.props.changeFunc(e.target.value);
    }
    render() {
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <div>
                    <Radio value={1}>楼盘一</Radio>
                </div>
                <div>
                    <Radio value={2}>楼盘二</Radio>
                </div>
                <div>
                    <Radio value={3}>楼盘三</Radio>
                </div>
                <div>
                    <Radio value={4}>楼盘四</Radio>
                </div>
            </RadioGroup>
        );
    }
}