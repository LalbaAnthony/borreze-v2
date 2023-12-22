<?php


namespace Palasthotel\WordPress\Headless\Store;


use Palasthotel\WordPress\Headless\Components\Database;

/**
 * @property string $table
 */
class RevalidationDatabase extends Database {

	function init() {
		$this->table = $this->wpdb->prefix . "headless_revalidate";
	}

    /**
     * @param int $post_id
     * @return bool|int
     */
	public function addPost( $post_id ) {
		return $this->wpdb->replace(
			$this->table,
			[
				"content_id"    => $post_id,
				"content_type"  => "post",
				"revalidated_at" => null,
				"revalidation_state" => "pending",
			]
		);
	}

	/**
	 * @param int $after
	 *
	 * @return Int[]
	 */
	public function getPendingPosts() {
		$sql = "SELECT content_id FROM $this->table WHERE content_type = 'post' AND revalidation_state = 'pending'";
		return  $this->wpdb->get_col( $sql);
	}

	/**
	 * @param int $after
	 *
	 * @return int
	 */
	public function countPendingPosts(): int{
		$sql = "SELECT count(content_id) FROM $this->table WHERE content_type = 'post' AND revalidation_state = 'pending'";
		return intval($this->wpdb->get_var($sql));
	}

	public function setPostState(int $post_id, $state = "revalidated") {
		return $this->wpdb->update(
			$this->table,
			[
				"revalidated_at" => current_time( 'mysql' ),
				"revalidation_state" => $state,
			],
			[
				"content_id" => $post_id,
				"content_type" => "post",
			],
			["%s", "%s"],
			["%d", "%s"]
		);
	}

	public function createTables() {
		parent::createTables();
		\dbDelta( "CREATE TABLE IF NOT EXISTS $this->table
			(
			 id bigint(20) unsigned auto_increment,
    		 content_id bigint(20) unsigned NOT NULL,
    		 content_type varchar(40) NOT NULL,
    		 revalidation_state varchar(30),
    		 revalidated_at TIMESTAMP default null,
			 primary key (id),
    		 key (content_id),
			 key (content_type),
    		 key (revalidation_state),
    		 key (revalidated_at),
    		 unique key exact_content (content_id, content_type)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");
	}
}
