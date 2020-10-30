import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../store/actions/busca.actions";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
  getItems = () => {};

  render() {
    let token = localStorage.getItem("access_token");
    if (!token) {
      window.location.replace("/");
    }

    return (
      token && (
        <div className="Dashboard">
          <div className="Header">
            <button className="botao-marrom">QUEM SOMOS</button>
            <button className="botao-marrom">PRODUTOS</button>
            <button className="botao-marrom">CONTATO</button>
            <button className="botao-marrom">LOJAS</button>
            <button className="botao-rosa">SEJA FRANQUEADO</button>
            <Link to="/adm" className="botao-amarelo">
              ADMINISTRAÇÂO
            </Link>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  item: (texto) => dispatch(getItems(texto)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
