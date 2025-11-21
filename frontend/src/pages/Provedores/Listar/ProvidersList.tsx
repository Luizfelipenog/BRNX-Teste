import "./ProvidersList.css";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

export default function ProvidersList() {
  const providers = [
    { nome: "MegaLink Provedor", responsavel: "Ana Silva", contato: "(11) 98765-4321" },
    { nome: "RedeMax Conectividade", responsavel: "Bruno Costa", contato: "(21) 91234-5678" },
    { nome: "FibraVeloz Internet", responsavel: "Carla Dias", contato: "(31) 99876-1234" },
    { nome: "TecnoLink Soluções", responsavel: "Daniel Rocha", contato: "(41) 97654-9876" },
    { nome: "UltraNet Fibra Ótica", responsavel: "Elisa Santos", contato: "(51) 96543-2109" },
    { nome: "ConectaMais", responsavel: "Fernando Lima", contato: "(61) 95432-8765" },
  ];

  return (
    <div className="providers-container">
      <div className="providers-header">
        <h1>Provedores</h1>
        <button className="btn-primary">
          <PlusCircle size={18} />
          Cadastrar Provedor
        </button>
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
            {providers.map((prov, index) => (
              <tr key={index}>
                <td>{prov.nome}</td>
                <td>{prov.responsavel}</td>
                <td>{prov.contato}</td>
                <td className="actions">
                  <button className="btn-edit">
                    <Pencil size={16} />
                    Editar
                  </button>

                  <button className="btn-delete">
                    <Trash2 size={16} />
                    Deletar
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
