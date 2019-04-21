import axios from 'axios/index'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Map from '.././Map'

class PointsIndex extends Component {

    constructor () {
        super();
        this.state = {
            points: [],
            auth: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    componentDidMount () {
        axios.get('/api/route/1', {
            headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNlOTIwMTIxYWMxYTc4MWQxZDhmYjlmMzczNjk1M2Q4OGIyMTRlNWNmMjM4YTViOTYxMzIxOWViN2Y3MGIyMzQwYjE5NDZjZGU3ZjMzODQ0In0.eyJhdWQiOiIzIiwianRpIjoiY2U5MjAxMjFhYzFhNzgxZDFkOGZiOWYzNzM2OTUzZDg4YjIxNGU1Y2YyMzhhNWI5NjEzMjE5ZWI3ZjcwYjIzNDBiMTk0NmNkZTdmMzM4NDQiLCJpYXQiOjE1NTU1MDA2MDQsIm5iZiI6MTU1NTUwMDYwNCwiZXhwIjoxNTg3MTIzMDA0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.yYHJvPFiiOfFnb45FtzxbZPRY0z3fZ-W3B1n_luJuVMhm_t0OyJjhcnxAj7Q2zk5cOxdOpL9jjjXYkAXaBRiyjhk33xxpY94-5U3mf4NZF8EeAxCwiaqWZTAjvtd3boxzLbj26YsKsvSqks2JvQtYPIAHg2xtR6ZCxjUoncSP01Ck77DoGoxfu8LseQHbKM2X2qZF2PRBc8XChTepZ04vA9nr6Rc9bUX0tFJ3xYAuUfdm93I4RF_LskKvrxf3Np7GretUr2ljc3oz1t6RyTPDEIN9cKrN0xSgMld24upBvl5azqqbU3IDd324MmgTalRRA-1M8OwcwlAHWXBXIiN2G647QjnebAJ5GbILbXvJ0i5JRcae7kWQKXG7WS6-84XoepSlE6zlNBCCKkyfDSjrE63NeXLgA1HMAUAGxvt-_1RUA3ClHVeFUf2uHfBvbbzi_2LVdyp8Fbwtl43w8g3LRSxH6UvaKh3AqbU-35ZzkKpRlBkUjNuOc0oBR9C_snVSY47NCwvIqNnCvSotpNecE-H9QERGmW5FA4Q_Swy6LlQ1ZwZR02Bs6mJnLm8Ik9QtclHBpvYTaoVHF9_Aw0FvfNiu_5irt4-pKn0Da2xb8FcvUN3wA4LXO6CnrX6AMunmJ5njuJW8um4bTaXmiE1QGAsGLkFx09BEunbZL7OFYg'}
        }).then(response => {
            console.log(response.data);
        });
        axios.get('/api/points', {
            headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNlOTIwMTIxYWMxYTc4MWQxZDhmYjlmMzczNjk1M2Q4OGIyMTRlNWNmMjM4YTViOTYxMzIxOWViN2Y3MGIyMzQwYjE5NDZjZGU3ZjMzODQ0In0.eyJhdWQiOiIzIiwianRpIjoiY2U5MjAxMjFhYzFhNzgxZDFkOGZiOWYzNzM2OTUzZDg4YjIxNGU1Y2YyMzhhNWI5NjEzMjE5ZWI3ZjcwYjIzNDBiMTk0NmNkZTdmMzM4NDQiLCJpYXQiOjE1NTU1MDA2MDQsIm5iZiI6MTU1NTUwMDYwNCwiZXhwIjoxNTg3MTIzMDA0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.yYHJvPFiiOfFnb45FtzxbZPRY0z3fZ-W3B1n_luJuVMhm_t0OyJjhcnxAj7Q2zk5cOxdOpL9jjjXYkAXaBRiyjhk33xxpY94-5U3mf4NZF8EeAxCwiaqWZTAjvtd3boxzLbj26YsKsvSqks2JvQtYPIAHg2xtR6ZCxjUoncSP01Ck77DoGoxfu8LseQHbKM2X2qZF2PRBc8XChTepZ04vA9nr6Rc9bUX0tFJ3xYAuUfdm93I4RF_LskKvrxf3Np7GretUr2ljc3oz1t6RyTPDEIN9cKrN0xSgMld24upBvl5azqqbU3IDd324MmgTalRRA-1M8OwcwlAHWXBXIiN2G647QjnebAJ5GbILbXvJ0i5JRcae7kWQKXG7WS6-84XoepSlE6zlNBCCKkyfDSjrE63NeXLgA1HMAUAGxvt-_1RUA3ClHVeFUf2uHfBvbbzi_2LVdyp8Fbwtl43w8g3LRSxH6UvaKh3AqbU-35ZzkKpRlBkUjNuOc0oBR9C_snVSY47NCwvIqNnCvSotpNecE-H9QERGmW5FA4Q_Swy6LlQ1ZwZR02Bs6mJnLm8Ik9QtclHBpvYTaoVHF9_Aw0FvfNiu_5irt4-pKn0Da2xb8FcvUN3wA4LXO6CnrX6AMunmJ5njuJW8um4bTaXmiE1QGAsGLkFx09BEunbZL7OFYg'}
        }).then(response => {
            this.setState({
                points: response.data
            });
        });
    }


    render () {
        return (
            <Map markers={this.state.points} handleMarkerClick={() => alert('fa')} />
        )
    }
}

export default PointsIndex