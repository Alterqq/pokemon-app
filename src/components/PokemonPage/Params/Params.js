import React from 'react'
import styles from './Params.module.css'

const Params = ({profile, getName}) => {
  const getStringParam = (array) => {
    return array.join(', ').replace(/-/g, ' ');
  }

  const abilities = getStringParam(profile.abilities.map(a => a.ability.name))
  const moves = getStringParam(profile.moves.map(m => m.move.name))
  const stats = profile.stats.map(n => <span key={n.stat.url}>{n.stat.name.replace(/-/g, ' ')}: {n.base_stat}</span>)
  const types = getStringParam(profile.types.map(t => t.type.name))

  return (
      <div className={styles.params}>
        <div className={styles.param}>#{profile.id}</div>
        <div className={styles.param}>
          <b>Name:</b><span>{getName(profile.name)}</span>
        </div>
        <div className={styles.param}>
          <b>Base Experience:</b><span>{profile.base_experience}</span>
        </div>
        <div className={styles.param}>
          <b>Types:</b><span>{types}</span>
        </div>
        <div className={styles.param}>
          <b>Height:</b><span>{profile.height} decimetres</span>
        </div>
        <div className={styles.param}>
          <b>Weight:</b><span>{profile.weight} hectograms</span>
        </div>
        <div className={styles.param}>
          <b>Abilities:</b> <span>{abilities}</span>
        </div>
        <div className={styles.param}>
          <b>Moves:</b> <span>{moves}</span>
        </div>
        <div className={styles.param}>
          <b>Stats:</b>
          <div className={styles.stats}>
            {stats}
          </div>
        </div>
      </div>
  )
}

export default Params