import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json({

        stats: [

            {
                title: "Clientes Activos",
                value: 1250,
                growth: "+12.5%",
                icon: "users",
            },

            {
                title: "Ingresos",
                value: 245000,
                growth: "+18.3%",
                icon: "money",
            },

            {
                title: "Tareas",
                value: 85,
                growth: "+8.1%",
                icon: "tasks",
            },

            {
                title: "Alertas",
                value: 7,
                growth: "-22%",
                icon: "shield",
            },

        ],

    });

}