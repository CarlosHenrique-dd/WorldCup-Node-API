CREATE TABLE IF NOT EXISTS games (
  id serial,
	team_a varchar(32),
	goal_a int,
  team_b varchar(32),
	goal_b int,
	match_day date
);

INSERT INTO games (team_a, goal_a, team_b, goal_b, match_day) values ('Barcelona', 8, 'Bayen', 0, '2023-08-01');
INSERT INTO games (team_a, goal_a, team_b, goal_b, match_day) values ('Real Madrid', 1, 'Atletico de Madrid', 2, '2030-01-05');
INSERT INTO games (team_a, goal_a, team_b, goal_b, match_day) values ('Barcelona', 2, 'City', 1, '2024-05-08');
INSERT INTO games (team_a, goal_a, team_b, goal_b, match_day) values ('Chelsea', 4, 'Barcelona', 9, '2026-04-08');
INSERT INTO games (team_a, goal_a, team_b, goal_b, match_day) values ('Valencia', 1, 'Dynamo', 1, '2027-09-02');
INSERT INTO games (team_a, goal_a, team_b, goal_b, match_day) values ('Barcelona', 8, 'Real Sociedad', 0, '2021-06-01');
INSERT INTO games (team_a, goal_a, team_b, goal_b, match_day) values ('Brasil', 8, 'Argentina', 0, '2022-12-12');