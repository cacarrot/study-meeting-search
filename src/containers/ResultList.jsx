import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { DateUtil } from '../util';

class ResultList extends Component {
    render() {
        return (
            <div>
                <ul className="tabs left">
                    <li><a href="#tabATND">ATND</a></li>
                    <li><a href="#tabConnpass">Connpass</a></li>
                </ul>

                <div id="tabATND" className="tab-content">
                    <ul className="alt">
                        {this.props.result.atnd.map(
                            obj =>
                                <li>
                                    <a href={obj.event.event_url} target="_blank">
                                        {'['}
                                        {DateUtil.format(obj.event.started_at, 'YYYY年MM月DD日 HH:mm') }
                                        {'] '}
                                        {obj.event.title}
                                    </a>
                                </li>
                        ) }
                    </ul>
                </div>

                <div id="tabConnpass" className="tab-content">
                    <ul className="alt">
                        {this.props.result.connpass.map(
                            obj =>
                                <li>
                                    <a href={obj.event_url} target="_blank">
                                        {'['}
                                        {DateUtil.format(obj.started_at, 'YYYY年MM月DD日 HH:mm') }
                                        {'] '}
                                        {obj.title}
                                    </a>
                                </li>
                        ) }
                    </ul>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

ResultList = connect(mapStateToProps, mapDispatchToProps)(ResultList);

export default ResultList;
