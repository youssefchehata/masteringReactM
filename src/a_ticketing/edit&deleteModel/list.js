import   React         from "react"                            ;
import { Link        } from "react-router-dom"                 ;
import   Swal          from "sweetalert2"                      ;
import   Grid          from "../../../../common/grid/Grid"     ;
import   UserEdit      from "./Actions/UsersEdit"              ;
import   BankService   from "../../../../services/bank.service";


class UserList extends React.Component {

  state = { banks: [], filter: "", total: 0 };

  bankService = new BankService();

  handlePagination = (filter = "", page = 1, take = 20) => 
  {
    this.bankService.getWithPagination(page, take, filter)
    .then(result =>
   { this.setState({ banks: result.data.data , searchState: false, }) });
  };


 // delete_modal
   handleDelete = async id => {
      debugger;
      const originalbanks = this.state.banks;
      const banks = originalbanks.filter(p => p.id !== id);
      this.setState({ banks });
      try {
        debugger;
        await this.bankService.delete(id);
        //await axios.delete(apiEndpoint + "/");
        // throw new Error("");
      } catch (ex) {
        if (ex.response && ex.response.status === 404)
          alert("This post has already been deleted.");
        else {
          alert("An unexpected error occurred.");
        }
        this.setState({ banks: originalbanks });
      }
      // console.log("Delete", post);
    };
  // edit modal
  handleShow = () => { this.setState({ showCreate: true }); };

  handleHide = () => { this.setState({ showCreate: false }); };

  OpenModal1 = (id, value) => { this.setState({ id, value, showCreate: true }) };

  actionsColumn = (id, value) => {
    return (
      <React.Fragment>
        <Link
          to="#"
          className="btn btn-label-danger btn-pill btn-circle btn-icon mr-2"
          onClick={() => this.handleDelete(id)}
          title="Supprimer Banque"
        >
          <i class="la la-trash" />
        </Link>
        <Link
          to="#"
          className="btn btn-label-accent btn-pill btn-circle btn-icon mr-2"
          onClick={() => this.OpenModal1(id, value)}
          title="Modifier User"
          model-id={id}
        >
          <i className="la la-edit" />
        </Link>
      </React.Fragment>
    );
  };
 

  render() {
    const columns = [
      { column: "banque", columnId: "id", label: "Users", class: "title", tdClass: "text-nowrap" },
      { column: "id", columnId: "id", label: "Actions", class: "title", renderBodyId: this.actionsColumn }
    ];

    return (
      <React.Fragment>
        <UserEdit
          id              ={this.state.id        }
          filter          ={this.state.filter    }
          showCreate      ={this.state.showCreate}
          handlePagination={this.handlePagination}
          handleHide      ={this.handleHide      }
          handleShow      ={this.handleShow      }
          
        />

        <Grid
          columns         ={     columns          }
          handlePageChange={this.handlePagination }
          total           ={this.state.total      }
          rows            ={this.state.banks      }
          filter          ={this.state.filter     }
          searchState     ={this.state.searchState}
        />
      </React.Fragment>
    );
  }
}
export default UserList;
