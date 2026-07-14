import FolderCard from "./FolderCard";

const folders = [

  { name:"Contratos", files:24 },

  { name:"Facturación", files:85 },

  { name:"Recursos Humanos", files:18 },

  { name:"Legal", files:12 },

  { name:"Marketing", files:31 },

  { name:"Comercial", files:42 },

];

export default function FolderGrid(){

    return(

        <div className="grid grid-cols-3 gap-6">

            {folders.map(folder=>(

                <FolderCard
                    key={folder.name}
                    {...folder}
                />

            ))}

        </div>

    )

}