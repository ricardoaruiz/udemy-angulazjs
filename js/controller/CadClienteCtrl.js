app.controller("CadClienteCtrl", function($scope){
    $scope.app="Cadastro de Clientes";
    
    $scope.clientes = [
        {   
            codigo : "0001", 
            nome : "Ricardo", 
            data : new Date(), 
            valor: "100",
            tipoCliente : {tipo : "Pessoa Física"}
        },
        {
            codigo : "0002", 
            nome : "Cinthya", 
            data : new Date(),
            valor: "200",
            tipoCliente : {tipo : "Pessoa Física"}
        },
        {
            codigo : "0003", 
            nome : "Guilherme", 
            data : new Date(),
            valor: "300",
            tipoCliente : {tipo : "Pessoa Física"}
        }
    ];
    
    $scope.tipoClientes = [
        {
            codigo : "01", 
            tipo : "Pessoa Física", 
            local: "Nacional"
        },
        {
            codigo : "02", 
            tipo : "Pessoa Jurídica", 
            local: "Nacional"
        },
        {
            codigo : "03", 
            tipo : "Sócios", 
            local: "Nacional"
        },
        {
            codigo : "04", 
            tipo : "Exportador", 
            local: "Internacioal"
        },
        {
            codigo : "05", 
            tipo : "Importador", 
            local: "Internacioal"
        }
    ];
    
    $scope.adicionarClientes = function(cliente){
        cliente.data = new Date();
        $scope.clientes.push(angular.copy(cliente));
        delete $scope.cliente;
    };
    
    $scope.apagarClientes = function(clientes){
      $scope.clientes = clientes.filter(function(cliente){
          if (!cliente.selecionado) return cliente;
      });
    };
    
    $scope.temClienteSelecionado = function(clientes){
        return clientes.some(function(cliente){
            return cliente.selecionado;
        });
    };
    
})