/* Number of total columns/semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff"];

// Total credits and workload needed for diploma completion by course category
window.categories = [
    { name: "Obrigatórias", totalcredits: 174, totalworkload: 3115, id: 1},
    { name: "Condicionadas", totalcredits: 40, totalworkload: 600, id: 2},
    { name: "Livre Escolha", totalcredits: 8, totalworkload: 120, id: 3},
    { name: "Grupo Humanas", totalcredits: 4, totalworkload: 60, id: 4},
    { name: "Grupo ACE", totalcredits: 0, totalworkload: 405, id: 5},
]

// Order of courses matters: do not swap positions. Append at the end.
window.courses = [
    { name: "Algoritmos e Programação", credits: 5, code: "COS110", semester: 1, category: 1, workload: 90},
    { name: "Int. a Eng. Comp. e Informação", credits: 2, code: "COS111", semester: 1, category: 1, workload: 30},
    { name: "Circuitos Lógicos", credits: 5, code: "EEL280", semester: 1, workload: 90},
    { name: "Cálculo I", credits: 6, code: "MAC118", semester: 1, workload: 90},
    { name: "Física I", credits: 4, code: "FIT112", semester: 1, workload: 60},
    { name: "Física Experimental I", credits: 1, code: "FIS111", semester: 1, category: 1, workload: 30},
    { name: "Linguagens de Programação", credits: 5, code: "EEL670", semester: 2, category: 1, workload: 90},
    { name: "Álgebra Linear II", credits: 4, code: "MAE125", semester: 2, category: 1, workload: 60},
    { name: "Sistemas Digitais", credits: 5, code: "EEL480", semester: 2, requirements: [2], category: 1, workload: 90},
    { name: "Cálculo II", credits: 4, code: "MAC128", semester: 2, requirements: [3], category: 1, workload: 60},
    { name: "Física II", credits: 4, code: "FIT122", semester: 2, requirements: [3, 4], category: 1, workload: 60},
    { name: "Física Experimental II", credits: 1, code: "FIS121", semester: 2, requirements: [4, 5], category: 1, workload: 30},
    { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 2, category: 4, workload: 30},
    { name: "Algoritmos e Estrut. de Dados", credits: 5, code: "EEL470", semester: 3, requirements: [0], category: 1, workload: 75},
    { name: "Teoria da Computação", credits: 4, code: "EEL881", semester: 3, category: 1, workload: 60},
    { name: "Arquitetura de Computadores", credits: 5, code: "EEL580", semester: 3, category: 1, workload: 75},
    { name: "Cálculo III", credits: 4, code: "MAC238", semester: 3, requirements: [9], category: 1, workload: 60},
    { name: "Física III", credits: 4, code: "FIM230", semester: 3, requirements: [4, 9], category: 1, workload: 60},
    { name: "Física Experimental III", credits: 1, code: "FIN231", semester: 3, requirements: [11], category: 1, workload: 30},
    { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 3, category: 4, workload: 30},
    { name: "Teoria dos Grafos", credits: 4, code: "COS242", semester: 4, requirements: [13], category: 1, workload: 60},
    { name: "Estatística e Mod. Probabilísticos", credits: 4, code: "COE241", semester: 4, category: 1, workload: 60},
    { name: "Computadores e Sociedade", credits: 4, code: "COS471", semester: 4, category: 1, workload: 60},
    { name: "Cálculo IV", credits: 4, code: "MAC248", semester: 4, requirements: [9], category: 1, workload: 60},
    { name: "Física IV", credits: 4, code: "FIM240", semester: 4, requirements: [16, 17], category: 1, workload: 60},
    { name: "Física Experimental IV", credits: 1, code: "FIN241", semester: 4, requirements: [18], category: 1, workload: 30},
    { name: "Banco de Dados", credits: 4, code: "EEL871", semester: 5, category: 1, workload: 75},
    { name: "Lógica Matemática", credits: 4, code: "COS351", semester: 5, category: 1, workload: 60},
    { name: "Álg. Linear Computacional", credits: 4, code: "COC473", semester: 5, requirements: [7, 16], category: 1, workload: 60},
    { name: "Redes de Computadores I", credits: 4, code: "EEL878", semester: 5, category: 1, workload: 75},
    { name: "Sistemas Operacionais", credits: 5, code: "EEL770", semester: 5, category: 1, workload: 75},
    { name: "Química Experimental", credits: 2, code: "IQG112", semester: 5, category: 1, workload: 60},
    { name: "Otimização", credits: 4, semester: 6, code: "COS360", requirements: [0, 16], category: 1, workload: 60},
    { name: "Inteligência Computacional", credits: 4, code: "COC361", semester: 6, category: 1, workload: 60},
    { name: "Engenharia de Software", credits: 4, code: "EEL873", semester: 6, category: 1, workload: 75},
    { name: "Redes de Computadores II", credits: 4, code: "EEL879", semester: 6, category: 1, workload: 60},
    { name: "Telecomunic.", credits: 4, code: "COE363", semester: 6, category: 1, workload: 60},
    { name: "Computação Gráfica", credits: 4, code: "EEL882", semester: 6, category: 1, workload: 75},
    { name: "Programação Avançada", credits: 4, code: "EEL418", semester: 7, requirements: [13, 6], category: 1, workload: 75},
    { name: "Computação de Alto Desempenho", credits: 3, code: "COC472", semester: 7, category: 1, workload: 75},
    { name: "Sistemas Distribuídos", credits: 4, code: "COS470", semester: 7, category: 1, workload: 60},
    { name: "Gestão do Conhecimento", credits: 4, code: "COP232", semester: 7, category: 1, workload: 60},
    { name: "Atividades Acad. Optativas", credits: 8, semester: 7, step: 1, category: 2, workload: 120},
    { name: "Construção de Banco de Dados", credits: 4, code: "COS480", semester: 8, requirements: [26], category: 1, workload: 60},
    { name: "Empreend. I", credits: 4, code: "COP364", semester: 8, category: 1, workload: 60},
    { name: "Qualidade de Software", credits: 4, code: "COS482", semester: 8, requirements: [34], category: 1, workload: 60},
    { name: "Projeto de Graduação", credits: 4, code: "EEWX00", semester: 8, category: 1, workload: 180},
    { name: "Atividades Acad. Optativas", credits: 8, semester: 8, step: 1, category: 2, workload: 120},
    { name: "Estágio Obrigatório", credits: 160, code: "EEWU00", semester: 9, category: 1, workload: 160},
    { name: "Atividades Acad. Optativas", credits: 16, semester: 9, step: 1, category: 2, workload: 240},
    { name: "Atividades Acad. Optativas", credits: 8, semester: 10, step: 1, category: 2, workload: 120},
    { name: "Atividades Acad. Livre Escolha", credits: 8, semester: 10, step: 1, category: 3, workload: 120},
    { name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15, category: 5, workload: 405},
	{ name: "Química EE", credits: 4, semester: 4, category: 1, workload: 60}
]

window.opcourses = [
    {name: "História da Tecnlogia", credits:2 , code:"EEI206"},
    {name: "Metodologia de Pesquisa", credits:2 , code:"EEI212"},
    {name: "Engenharia e Sociedade", credits:4 , code:"EEL191"},
    {name: "Evolução da Ciência", credits:4 , code:"EEL191"},
    {name: "Matemática Computacional", credits:5 , code:"COC600"},
    {name: "Mineração de Dados", credits:5 , code:"COC602"},
    {name: "Processamento de Imagens", credits:4 , code:"COC603"},
    {name: "Novos Modelos de Negócio", credits:4 , code:"COP481"},
    {name: "Gestão da Inovação", credits:4 , code:"COP503"},
    {name: "Inovação e Empreendedorismo", credits:4, code:"COP506"},
    {name: "Trabalho do Futuro", credits:4 , code:"COP509"},
    {name: "Redes Complexas", credits:4 , code:"COS010"},
    {name: "Robótica coletiva", credits:4 , code:"COS011"},
    {name: "Des.de Software Orient. a Obje ", credits:4 , code:"COS603"},
    {name: "Dis.e Parale.em B.de Dados", credits:4 , code:"COS604"},
    {name: "Lab.de Engenharia de Software", credits:4 , code:"COS606"},
    {name: "Processamento de Voz", credits:4 , code:"EEL816"},
    {name: "Redes Neurais", credits:4 , code:"EEL817"},
    {name: "Novas Mídias", credits:4 , code:"EEL841"},
    {name: "Otimização em Grafos", credits:4 , code:"EEL857"},
    {name: "Inteligência Artifical", credits:4 , code:"EEL874"},
    {name: "Internet e ArquiteturaTCP/IP", credits:4 , code:"EEL875"},
    {name: "Microcomputadores", credits:4 , code:"EEl876"},
    {name: "Big-data", credits:4 , code:"EEL890"},
    {name: "Software para Smartphone", credits:4 , code:"EEL970"}
]