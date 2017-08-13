var selectedDataCell;

var allDataCells = document.querySelectorAll("td");

allDataCells.forEach(function(cell) {
    cell.onclick = function () {
            if(selectedDataCell == null){
                selectedDataCell = this;
                selectedDataCell.classList.toggle("selected-table-td");    
                return;                                                    
            }

            selectedDataCell.classList.toggle("selected-table-td");                            

            if(selectedDataCell == this)
                selectedDataCell = null;
            else{
                selectedDataCell = this;
                this.classList.toggle("selected-table-td");                            
            }
        };
});