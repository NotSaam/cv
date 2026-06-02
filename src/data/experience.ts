export type Milestone = { tag: string; title: string; body: string };

// Trayectoria autodidacta y práctica. Sin titulaciones ni certificaciones inventadas:
// reflejada a partir de información pública y de la trayectoria de proyectos.
export const experience: Milestone[] = [
  {
    tag: 'Base',
    title: 'Desarrollo web',
    body:
      'Fundamentos de desarrollo front y back, construcción de interfaces y APIs. Punto de partida sobre el que se apoya todo lo demás.',
  },
  {
    tag: 'En curso',
    title: 'Inteligencia Artificial',
    body:
      'Aprendizaje continuo en IA aplicada: visión por computador, modelos de detección, pipelines de datos y orquestación de agentes.',
  },
  {
    tag: 'En curso',
    title: 'Ciberseguridad',
    body:
      'Especialización práctica en Blue Team, Red Team y arquitecturas seguras (SSO, MFA, auditoría) a través del desarrollo de FLK0S.',
  },
  {
    tag: 'Práctica',
    title: 'Proyectos como formación',
    body:
      'FLAKAI y FLK0S funcionan como laboratorio real: cada uno consolida conocimiento en IA, sistemas y seguridad llevándolo a producto.',
  },
];
