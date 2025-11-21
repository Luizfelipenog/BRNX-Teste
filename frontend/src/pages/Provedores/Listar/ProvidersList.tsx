import "./ProvidersList.css";
import { Pencil, Trash2, PlusCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";

export default function ProvidersList() {
  const [providers, setProviders] = useState([]);
  const navigate = useNavigate();

  // Buscar provedores do backend
  async function fetchProviders() {
    try {
      const response = await api.get("/api/providers");
      setProviders(response.data);
    } catch (error) {
      console.error("Erro ao buscar provedores:", error);
      alert("Não foi possível carregar os provedores.");
    }
  }

  useEffect(() => {
    fetchProviders();
  }, []);

  // Função para deletar provedor
  async function handleDelete(id: string) {
    const confirmar = window.confirm("Tem certeza que deseja deletar este provedor?");
    if (!confirmar) return;

    try {
      await api.delete(`/api/providers/${id}`);

      // Atualiza a lista sem recarregar página
      setProviders(prev => prev.filter((p: any) => p.id !== id));

      alert("Provedor deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar provedor:", error);
      alert("Erro ao deletar provedor.");
    }
  }

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
              <th>Email</th>
              <th>Telefone</th>
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
                  {/* EDITAR */}
                  <button
                    className="btn-edit"
                    onClick={() => navigate(`/provedores/editar/${prov.id}`)}
                  >
                    <Pencil size={16} /> Editar
                  </button>

                  {/* DELETAR */}
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(prov.id)}
                  >
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
