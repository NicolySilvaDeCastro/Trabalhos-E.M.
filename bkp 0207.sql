select curso.nome as curso, disciplina.nome as disciplina, professor.nome as professor
from curso, disciplina, professor, curso_disciplina, professor_disciplina
where curso.id = curso_disciplina.id_curso
and professor.matricula = professor_disciplina.matricula_prof
and disciplina.id = professor_disciplina.id_disciplina
and disciplina.id = curso_disciplina.id_disciplina

order by curso.nome, disciplina.nome, professor.nome