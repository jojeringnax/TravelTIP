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
            headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY1ZjhkMzYyMDIwOWM5NTA1OTViNjc5ZjJlN2Y3ZjNiMGFiOWU1YjViMGFkYTY2YTc0ZmU1NjNmYzA2OGRkMTBhODYwNTE0MjNjNDhmMDBiIn0.eyJhdWQiOiI0IiwianRpIjoiZjVmOGQzNjIwMjA5Yzk1MDU5NWI2NzlmMmU3ZjdmM2IwYWI5ZTViNWIwYWRhNjZhNzRmZTU2M2ZjMDY4ZGQxMGE4NjA1MTQyM2M0OGYwMGIiLCJpYXQiOjE1NTUzMzQwOTAsIm5iZiI6MTU1NTMzNDA5MCwiZXhwIjoxNTg2OTU2NDkwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JM-pS90l2-6TitQIUKRcheGV-N8KrdU5CYaep-REdPYxU-x0GwGQyQbV4VxQw6Q_Vi9sxmkjsVs9phdg74npaDGRDOwVpUnq0FhoLiroB_STPN3i1FFq1udrayQolQU1LrJb93972XfVz9aQvYDyzvtApuSihOwyv45zT4kvGvRoAM2-oYY1XBwb_ffH3ruf1GZVvyu1IRnNXxgC40e84Gj3SEQ3UtmMa_CiiwCnAuRVQlwMfGXnw8KdRubUKASNpDR8GxGc298DURPru9uAwlzSd1ZNw07QOWApmUAL9Rlhh5Kqh3IoNbZp9s4jQ4xls3B4OCCHYUz9gxjTMoUrLswB-3SLdzhh5JfuAoaBv9I8RJrw7txVKY935WGHib2-umSLH5yulD6S_g9EPKXsqDUitqVOn06wwpkbAJG3SbCd1iJuK6xNawIohwvLFPzUJF4h6LYm4Z8JKCTI6XBZwZJqpVF07xK2lWXed3J5x72LPdOeqFQRJgsiuU9snnRpp-2iD93lQ8D2wPfhY1ubHFc1HI93LNVA2wHbyDX3OKUTkxvL0KkppglfiNsY3l_LSwUOVZS56mr9Z8S0eKq0-RDihPl_SgYPr1qddo_b1XtIRE0RURvI44ljkKSRPJ5Brytzp7bkqEPVeAadpwe5yzm-6LkB48rzkAnMbNIgqF4'}
        }).then(response => {
            console.log(response.data);
        });
        axios.get('/api/points', {
            headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY1ZjhkMzYyMDIwOWM5NTA1OTViNjc5ZjJlN2Y3ZjNiMGFiOWU1YjViMGFkYTY2YTc0ZmU1NjNmYzA2OGRkMTBhODYwNTE0MjNjNDhmMDBiIn0.eyJhdWQiOiI0IiwianRpIjoiZjVmOGQzNjIwMjA5Yzk1MDU5NWI2NzlmMmU3ZjdmM2IwYWI5ZTViNWIwYWRhNjZhNzRmZTU2M2ZjMDY4ZGQxMGE4NjA1MTQyM2M0OGYwMGIiLCJpYXQiOjE1NTUzMzQwOTAsIm5iZiI6MTU1NTMzNDA5MCwiZXhwIjoxNTg2OTU2NDkwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JM-pS90l2-6TitQIUKRcheGV-N8KrdU5CYaep-REdPYxU-x0GwGQyQbV4VxQw6Q_Vi9sxmkjsVs9phdg74npaDGRDOwVpUnq0FhoLiroB_STPN3i1FFq1udrayQolQU1LrJb93972XfVz9aQvYDyzvtApuSihOwyv45zT4kvGvRoAM2-oYY1XBwb_ffH3ruf1GZVvyu1IRnNXxgC40e84Gj3SEQ3UtmMa_CiiwCnAuRVQlwMfGXnw8KdRubUKASNpDR8GxGc298DURPru9uAwlzSd1ZNw07QOWApmUAL9Rlhh5Kqh3IoNbZp9s4jQ4xls3B4OCCHYUz9gxjTMoUrLswB-3SLdzhh5JfuAoaBv9I8RJrw7txVKY935WGHib2-umSLH5yulD6S_g9EPKXsqDUitqVOn06wwpkbAJG3SbCd1iJuK6xNawIohwvLFPzUJF4h6LYm4Z8JKCTI6XBZwZJqpVF07xK2lWXed3J5x72LPdOeqFQRJgsiuU9snnRpp-2iD93lQ8D2wPfhY1ubHFc1HI93LNVA2wHbyDX3OKUTkxvL0KkppglfiNsY3l_LSwUOVZS56mr9Z8S0eKq0-RDihPl_SgYPr1qddo_b1XtIRE0RURvI44ljkKSRPJ5Brytzp7bkqEPVeAadpwe5yzm-6LkB48rzkAnMbNIgqF4'}
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