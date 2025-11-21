import "./ProvidersList.css";
import { Pencil, Trash2, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function ProvidersList() {
  const [providers, setProviders] = useState([]);

  // Buscar provedores do backend
  async function fetchProviders() {
    try {
      const response = await api.get("/api/providers"); // ROTA DO BACKEND
      setProviders(response.data);
    } catch (error) {
      console.error("Erro ao buscar provedores:", error);
      alert("Não existe provedores ainda.");
    }
  }

  useEffect(() => {
    fetchProviders();
  }, []);

  return (
    <div className="providers-container">
      <div className="providers-header">
        <h1>Provedores</h1>

        <Link to="/provedores/cadastrar" className="btn-primary">
          <PlusCircle size={18} />
          Cadastrar
        </Link>
      </div>

      <div className="providers-card">
        <h3>Lista de Provedores</h3>

        <table className="providers-table">
          <thead>
            <tr>
              <th>Nome Fantasia</th>
              <th>Responsável</th>
              <th>Contato</th>
              <th>Ações</th>
            </tr>
          </thead>

         <tbody>
        {providers.map((prov: any) => (
          <tr key={prov.id}>
            <td>{prov.nomeFantasia}</td>
            <td>{prov.responsavel}</td>
            <td>{prov.contatoEmail || "-"}</td>
            <td>{prov.contatoTelefone || "-"}</td>

            <td className="actions">
              <button className="btn-edit">
                <Pencil size={16} /> Editar
              </button>

              <button className="btn-delete">
                <Trash2 size={16} /> Deletar
              </button>
            </td>
          </tr>
        ))}
      </tbody>

        </table>

      </div>
    </div>
  );
}
