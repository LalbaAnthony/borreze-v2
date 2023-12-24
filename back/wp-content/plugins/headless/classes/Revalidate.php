<?php

namespace Palasthotel\WordPress\Headless;

use Palasthotel\WordPress\Headless\Components\Component;
use Palasthotel\WordPress\Headless\Model\Frontend;

class Revalidate extends Component {

	public function onCreate() {
		parent::onCreate();
		add_action('save_post', [$this, 'save_post']);
		add_action('edit_comment', [$this, 'edit_comment']);
	}

	public function save_post($post_id){
		if(wp_is_post_revision($post_id)) return;
		$this->plugin->dbRevalidation->addPost($post_id);
	}

	public function edit_comment($comment_id){
		$comment = get_comment($comment_id);
		$this->plugin->dbRevalidation->addPost($comment->comment_post_ID);
	}

	/**
	 * @param $post_id
	 *
	 * @return (\WP_Error|true)[]
	 */
	function revalidatePost($post_id) {
		$frontends = $this->plugin->headquarter->getFrontends();
		$results = [];
		foreach ($frontends as $frontend){
			$results[] = $this->revalidateByPostId($frontend, $post_id);
		}
		return $results;
	}

	function revalidateByPostId(Frontend $frontend, $post_id) {
		$permalink = get_permalink($post_id);
		$path = parse_url($permalink, PHP_URL_PATH);
		return $this->revalidateByPath(
			$frontend,
			apply_filters(Plugin::FILTER_REVALIDATE_PERMALINK_PATH, $path, $post_id,  $path, $frontend)
		);
	}

	function revalidateByPath(Frontend $frontend, $path){
		$baseUrl = $frontend->getBaseUrl();
		$url = untrailingslashit($baseUrl)."/api/revalidate?secret_token=".HEADLESS_SECRET_TOKEN."&path=".urlencode($path);
		return $this->executeRavalidation(
			apply_filters(Plugin::FILTER_REVALIDATE_BY_PATH_URL, $url, $path, $frontend)
		);
	}

	private function executeRavalidation($finalUrl){
		$url = add_query_arg('invalidate___cache', time(), $finalUrl);

		if(class_exists("\WP_CLI")){
			\WP_CLI::log("headless: execute revalidation -> $url");
		}

		$result = wp_remote_get($url, ["timeout" => 30]);

		if($result instanceof \WP_Error) return $result;

		$responseCode = wp_remote_retrieve_response_code($result);
		$isSuccess = $responseCode == 200;
		return $isSuccess ? true : new \WP_Error($responseCode, "Error");
	}


}
