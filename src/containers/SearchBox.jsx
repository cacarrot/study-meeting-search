import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as API from '../api';
import { DateUtil } from '../util';

class SearchBox extends Component {
    onChangeDate(e) {
        this.props.changeDate(DateUtil.format(e.target.value.trim(), 'YYYYMMDD'));
    }

    onChangeKeyword(e) {
        this.props.changeKeyword(e.target.value.trim());
    }

    onClickSearch(e) {
        e.preventDefault();
        API.fetchEvents(this.props.condition,
            (response) => {
                this.props.gotEvents(response);
            }
        );
    }

    render() {
        return (
            <div>
                <div className="col_12 column">
                    <input type="date"  className="col_6" onChange={this.onChangeDate.bind(this) } placeholder="開催日" defaultValue={DateUtil.format(this.props.condition.date, 'YYYY-MM-DD') } />
                    <input type="text"  className="col_12" onChange={this.onChangeKeyword.bind(this) } placeholder="キーワード" />
                    <button className="blue col_12" onClick={this.onClickSearch.bind(this) }>検索</button>
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

SearchBox = connect(mapStateToProps, mapDispatchToProps)(SearchBox);

export default SearchBox;
