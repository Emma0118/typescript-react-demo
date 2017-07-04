import * as React from 'react';
import { Table, Button, DatePicker, Select } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;
import '../css/bannerManager.css';

const columns = [{
    title: '排序',
    dataIndex: 'sort',
}, {
    title: '发布状态',
    dataIndex: 'state',
}, {
    title: '标题',
    dataIndex: 'title',
}];
const data: any = [];
for (let i = 0; i < 15; i++) {
    data.push({
        key: i,
        sort: `${i}`,
        state: i % 2 === 0 ? '未发布' : '已发布',
        title: `这里是标题`,
    });
}

class BannerManager extends React.Component<{}, {}> {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const onChange = (date: any, dateString: any) => {
            console.log(date, dateString)
        }
        function handleChange(value:any) {
            console.log(`selected ${value}`);
        }
        return (
            <div>
                <div className="btn-group">
                    <Button type="primary">新增</Button>
                    <Button type="primary">发布</Button>
                    <Button type="primary">撤销发布</Button>
                </div>
                <div className="margin-bottom">
                    <span className="filter-title">生效日期</span>
                    <RangePicker style={{marginRight:10}} onChange={onChange} />
                    <span className="filter-title">发布状态</span>
                    <Select defaultValue="" style={{ width: 120,marginRight:10 }} onChange={handleChange}>
                        <Option value="">全部</Option>
                        <Option value="0">未发布</Option>
                        <Option value="1">已发布</Option>
                    </Select>
                    <span className="filter-title">广告位</span>
                    <Select defaultValue="" style={{ width: 120,marginRight:10 }} onChange={handleChange}>
                        <Option value="">全部</Option>
                        <Option value="0">顶部</Option>
                        <Option value="1">底部</Option>
                    </Select>
                    <Button type="primary" icon="search">搜索</Button>
                </div>
                <div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </div>
            </div>
        );
    }
}
export default BannerManager;