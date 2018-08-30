import React from 'react'
import { Context } from '../../util/provider'
import ListItem from './listitem/ListItem'
import './style.css'

class Search extends React.Component {
    componentDidMount() {
        this.props.context.actions.allHelpers();
    }

    toggleChip = (field) => {
        this.props.context.actions.toggleFilter(field)
    }

    render() {
        console.log(this.props.context.state)
        return (
            <div className="search-container">
                <h2>Search</h2>

                <div className="filter-row">
                    <button className={
                        this.props.context.state.filter.indexOf("baby") > -1 ? "chip active" : "chip"
                    } onClick={() => this.toggleChip("baby")}>Take care of baby</button>

                    <button className={
                        this.props.context.state.filter.indexOf("children") > -1 ? "chip active" : "chip"
                    } onClick={() => this.toggleChip("children")}>Take care of children</button>

                    <button className={
                        this.props.context.state.filter.indexOf("elderly") > -1 ? "chip active" : "chip"
                    } onClick={() => this.toggleChip("elderly")}>Take care of elderly</button>

                    <button className={
                        this.props.context.state.filter.indexOf("pets") > -1 ? "chip active" : "chip"
                    } onClick={() => this.toggleChip("pets")}>Take care of pets</button>

                    <button className={
                        this.props.context.state.filter.indexOf("cleaning") > -1 ? "chip active" : "chip"
                    } onClick={() => this.toggleChip("cleaning")}>Cleaning</button>

                    <button className={
                        this.props.context.state.filter.indexOf("cooking") > -1 ? "chip active" : "chip"
                    } onClick={() => this.toggleChip("cooking")}>Cooking</button>

                </div>

                <hr/>

                { this.props.context.state.helpers && !this.props.context.state.loading && this.props.context.state.helpers.map((helper, index) => (
                    <ListItem key={index} helper={helper} />
                ))}

                { this.props.context.state.helpers && this.props.context.state.helpers.length % 10 === 0 ?
                    <button className="helper-load-more" onClick={() => this.props.context.actions.filterLoadMore()}>
                        Load More Helpers
                    </button>
                    :
                    <button className="helper-load-more">
                        No More Helpers
                    </button>
                }
            </div>
        )
    }
}

export default (props) => (
    <Context.Consumer>
        { (context) => <Search context={context} {...props}/> }
    </Context.Consumer>
)